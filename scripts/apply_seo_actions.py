#!/usr/bin/env python3
"""
SEO Actions Applicator
unified-agent로부터 받은 SEO 개선 액션을 적용합니다.
"""

import os
import sys
import json
import re
from pathlib import Path
from typing import List, Dict, Any


class SEOActionApplicator:
    """SEO 액션을 파일에 적용하는 클래스"""

    def __init__(self, workspace_root: str = "."):
        self.workspace_root = Path(workspace_root)
        self.applied_actions = []
        self.failed_actions = []

    def apply_meta_title(self, file_path: str, new_value: str) -> bool:
        """메타 타이틀 업데이트"""
        full_path = self.workspace_root / file_path

        if not full_path.exists():
            print(f"❌ 파일을 찾을 수 없음: {file_path}")
            return False

        try:
            content = full_path.read_text(encoding='utf-8')

            # TSX 파일 처리 (Regex 기반)
            if file_path.endswith('.tsx') or file_path.endswith('.ts'):
                # Pattern 1: title: "..." 또는 title: '...'
                pattern1 = r'(title:\s*["\'])([^"\']+)(["\'])'
                if re.search(pattern1, content):
                    modified = re.sub(pattern1, rf'\g<1>{new_value}\g<3>', content)
                    full_path.write_text(modified, encoding='utf-8')
                    print(f"✅ [{file_path}] 메타 타이틀 변경: {new_value}")
                    return True

                # Pattern 2: <title>...</title>
                pattern2 = r'(<title>)([^<]+)(</title>)'
                if re.search(pattern2, content):
                    modified = re.sub(pattern2, rf'\g<1>{new_value}\g<3>', content)
                    full_path.write_text(modified, encoding='utf-8')
                    print(f"✅ [{file_path}] 메타 타이틀 변경: {new_value}")
                    return True

            # HTML 파일 처리 (BeautifulSoup)
            elif file_path.endswith('.html'):
                from bs4 import BeautifulSoup
                soup = BeautifulSoup(content, 'html.parser')

                title_tag = soup.find('title')
                if title_tag:
                    title_tag.string = new_value
                    full_path.write_text(str(soup), encoding='utf-8')
                    print(f"✅ [{file_path}] 메타 타이틀 변경: {new_value}")
                    return True

            print(f"⚠️  [{file_path}] 타이틀 패턴을 찾을 수 없음")
            return False

        except Exception as e:
            print(f"❌ [{file_path}] 메타 타이틀 변경 실패: {str(e)}")
            return False

    def apply_meta_description(self, file_path: str, new_value: str) -> bool:
        """메타 설명 업데이트"""
        full_path = self.workspace_root / file_path

        if not full_path.exists():
            print(f"❌ 파일을 찾을 수 없음: {file_path}")
            return False

        try:
            content = full_path.read_text(encoding='utf-8')

            # TSX 파일 처리
            if file_path.endswith('.tsx') or file_path.endswith('.ts'):
                # Pattern: description: "..." 또는 description: '...'
                pattern = r'(description:\s*["\'])([^"\']+)(["\'])'
                if re.search(pattern, content):
                    modified = re.sub(pattern, rf'\g<1>{new_value}\g<3>', content)
                    full_path.write_text(modified, encoding='utf-8')
                    print(f"✅ [{file_path}] 메타 설명 변경: {new_value[:50]}...")
                    return True

            # HTML 파일 처리
            elif file_path.endswith('.html'):
                from bs4 import BeautifulSoup
                soup = BeautifulSoup(content, 'html.parser')

                meta_desc = soup.find('meta', {'name': 'description'})
                if meta_desc:
                    meta_desc['content'] = new_value
                    full_path.write_text(str(soup), encoding='utf-8')
                    print(f"✅ [{file_path}] 메타 설명 변경: {new_value[:50]}...")
                    return True

            print(f"⚠️  [{file_path}] 설명 패턴을 찾을 수 없음")
            return False

        except Exception as e:
            print(f"❌ [{file_path}] 메타 설명 변경 실패: {str(e)}")
            return False

    def apply_action(self, action: Dict[str, Any]) -> bool:
        """단일 액션 적용"""
        action_type = action.get('action_type')
        target_file = action.get('target_file')

        # new_value는 최상위 또는 parameters 안에 있을 수 있음
        new_value = action.get('new_value')
        if not new_value and 'parameters' in action:
            new_value = action['parameters'].get('new_value')

        print(f"\n🔧 액션 적용: {action_type} → {target_file}")

        if action_type == 'update_meta_title':
            success = self.apply_meta_title(target_file, new_value)
        elif action_type == 'update_meta_description':
            success = self.apply_meta_description(target_file, new_value)
        else:
            print(f"⚠️  지원하지 않는 액션 타입: {action_type}")
            return False

        if success:
            self.applied_actions.append(action)
        else:
            self.failed_actions.append(action)

        return success

    def apply_all(self, actions: List[Dict[str, Any]]) -> Dict[str, Any]:
        """모든 액션 적용"""
        print(f"📦 총 {len(actions)}개 액션 수신")

        for idx, action in enumerate(actions, 1):
            print(f"\n[{idx}/{len(actions)}]", end=" ")
            self.apply_action(action)

        # 결과 요약
        result = {
            'total': len(actions),
            'applied': len(self.applied_actions),
            'failed': len(self.failed_actions)
        }

        print("\n" + "=" * 60)
        print(f"✅ 적용 완료: {result['applied']}/{result['total']}")
        if result['failed'] > 0:
            print(f"❌ 실패: {result['failed']}")
        print("=" * 60)

        # 마크다운 리포트 생성
        self._generate_report()

        return result

    def _generate_report(self):
        """적용된 액션 리포트 생성"""
        report_lines = []

        if self.applied_actions:
            report_lines.append("### ✅ Applied Actions\n")
            for action in self.applied_actions:
                action_type = action.get('action_type', 'unknown')
                target_file = action.get('target_file', 'unknown')
                new_value = action.get('new_value', '')

                if action_type == 'update_meta_title':
                    report_lines.append(f"- **메타 타이틀 변경** (`{target_file}`)")
                    report_lines.append(f"  - 새 값: `{new_value}`")
                elif action_type == 'update_meta_description':
                    report_lines.append(f"- **메타 설명 변경** (`{target_file}`)")
                    report_lines.append(f"  - 새 값: `{new_value[:100]}{'...' if len(new_value) > 100 else ''}`")

                report_lines.append("")

        if self.failed_actions:
            report_lines.append("### ❌ Failed Actions\n")
            for action in self.failed_actions:
                action_type = action.get('action_type', 'unknown')
                target_file = action.get('target_file', 'unknown')
                report_lines.append(f"- {action_type}: `{target_file}`")
                report_lines.append("")

        # /tmp에 저장 (GitHub Actions에서 읽을 수 있도록)
        report_path = Path('/tmp/applied_actions.md')
        report_path.write_text('\n'.join(report_lines), encoding='utf-8')
        print(f"\n📄 리포트 저장: {report_path}")


def main():
    """메인 실행 함수"""
    # 환경변수에서 액션 데이터 읽기
    actions_json = os.getenv('ACTIONS_JSON')

    if not actions_json:
        print("❌ ACTIONS_JSON 환경변수가 설정되지 않았습니다.")
        sys.exit(1)

    try:
        actions = json.loads(actions_json)
    except json.JSONDecodeError as e:
        print(f"❌ JSON 파싱 실패: {str(e)}")
        sys.exit(1)

    if not actions:
        print("ℹ️  적용할 액션이 없습니다.")
        sys.exit(0)

    # 액션 적용
    applicator = SEOActionApplicator(workspace_root=".")
    result = applicator.apply_all(actions)

    # 결과에 따라 exit code 설정
    if result['applied'] > 0:
        print("\n✅ SEO 개선 사항이 성공적으로 적용되었습니다!")
        sys.exit(0)
    else:
        print("\n⚠️  적용된 액션이 없습니다.")
        sys.exit(1)


if __name__ == '__main__':
    main()
