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

            # HTML 파일 처리 (Regex - 포맷 유지)
            elif file_path.endswith('.html'):
                # Pattern: <title>...</title>
                pattern = r'(<title>)([^<]+)(</title>)'
                if re.search(pattern, content):
                    modified = re.sub(pattern, rf'\1{new_value}\3', content)
                    full_path.write_text(modified, encoding='utf-8')
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

            # HTML 파일 처리 (Regex - 포맷 유지)
            elif file_path.endswith('.html'):
                # Pattern: <meta name="description" content="..." /> 또는 <meta content="..." name="description" />
                pattern = r'(<meta[^>]*name=["\']description["\'][^>]*content=["\'])([^"\']*)(["\']\s*/?>)'
                if re.search(pattern, content, re.IGNORECASE):
                    modified = re.sub(pattern, rf'\g<1>{new_value}\g<3>', content, flags=re.IGNORECASE)
                    full_path.write_text(modified, encoding='utf-8')
                    print(f"✅ [{file_path}] 메타 설명 변경: {new_value[:50]}...")
                    return True

            print(f"⚠️  [{file_path}] 설명 패턴을 찾을 수 없음")
            return False

        except Exception as e:
            print(f"❌ [{file_path}] 메타 설명 변경 실패: {str(e)}")
            return False

    def apply_add_internal_link(self, file_path: str, params: Dict[str, Any]) -> bool:
        """내부 링크 추가"""
        full_path = self.workspace_root / file_path

        if not full_path.exists():
            print(f"❌ 파일을 찾을 수 없음: {file_path}")
            return False

        try:
            link_url = params.get('link_url')
            link_text = params.get('link_text')
            target_text = params.get('target_text')  # 링크를 삽입할 위치의 텍스트

            if not all([link_url, link_text, target_text]):
                print(f"❌ 필수 파라미터 누락: link_url, link_text, target_text")
                return False

            content = full_path.read_text(encoding='utf-8')

            # TSX/JSX 파일 처리
            if file_path.endswith('.tsx') or file_path.endswith('.jsx'):
                # target_text 뒤에 링크 추가
                # 예: "텍스트" → "텍스트 <a href='/url'>링크</a>"
                link_html = f' <a href="{link_url}">{link_text}</a>'
                pattern = f'({re.escape(target_text)})'

                if re.search(pattern, content):
                    modified = re.sub(pattern, rf'\1{link_html}', content, count=1)
                    full_path.write_text(modified, encoding='utf-8')
                    print(f"✅ [{file_path}] 내부 링크 추가: {link_text} → {link_url}")
                    return True

            # HTML 파일 처리
            elif file_path.endswith('.html'):
                link_html = f' <a href="{link_url}">{link_text}</a>'
                pattern = f'({re.escape(target_text)})'

                if re.search(pattern, content):
                    modified = re.sub(pattern, rf'\1{link_html}', content, count=1)
                    full_path.write_text(modified, encoding='utf-8')
                    print(f"✅ [{file_path}] 내부 링크 추가: {link_text} → {link_url}")
                    return True

            print(f"⚠️  [{file_path}] target_text를 찾을 수 없음: {target_text}")
            return False

        except Exception as e:
            print(f"❌ [{file_path}] 내부 링크 추가 실패: {str(e)}")
            return False

    def apply_canonical_url(self, file_path: str, canonical_url: str) -> bool:
        """Canonical URL 업데이트"""
        full_path = self.workspace_root / file_path

        if not full_path.exists():
            print(f"❌ 파일을 찾을 수 없음: {file_path}")
            return False

        try:
            content = full_path.read_text(encoding='utf-8')

            # HTML 파일 처리
            if file_path.endswith('.html'):
                # 기존 canonical 태그가 있는지 확인
                canonical_pattern = r'<link[^>]*rel=["\']canonical["\'][^>]*/?>'

                if re.search(canonical_pattern, content, re.IGNORECASE):
                    # 기존 canonical 업데이트
                    new_canonical = f'<link rel="canonical" href="{canonical_url}" />'
                    modified = re.sub(canonical_pattern, new_canonical, content, flags=re.IGNORECASE)
                else:
                    # 새로운 canonical 추가 (</head> 앞에)
                    new_canonical = f'    <link rel="canonical" href="{canonical_url}" />\n  </head>'
                    modified = re.sub(r'</head>', new_canonical, content, flags=re.IGNORECASE)

                full_path.write_text(modified, encoding='utf-8')
                print(f"✅ [{file_path}] Canonical URL 설정: {canonical_url}")
                return True

            # TSX 파일 처리 (Next.js)
            elif file_path.endswith('.tsx') or file_path.endswith('.ts'):
                # Next.js metadata에 추가
                # alternates: { canonical: 'URL' }
                if 'alternates:' in content:
                    # 기존 alternates 업데이트
                    pattern = r'(alternates:\s*\{[^}]*canonical:\s*["\'])([^"\']+)(["\'])'
                    if re.search(pattern, content):
                        modified = re.sub(pattern, rf'\g<1>{canonical_url}\g<3>', content)
                    else:
                        # alternates에 canonical 추가
                        pattern = r'(alternates:\s*\{)'
                        modified = re.sub(pattern, rf'\1\n    canonical: "{canonical_url}",', content)
                else:
                    # 새로운 alternates 추가 (metadata 객체 안에)
                    pattern = r'(export const metadata[^{]*\{)'
                    modified = re.sub(pattern, rf'\1\n  alternates: {{\n    canonical: "{canonical_url}"\n  }},', content)

                full_path.write_text(modified, encoding='utf-8')
                print(f"✅ [{file_path}] Canonical URL 설정: {canonical_url}")
                return True

            print(f"⚠️  [{file_path}] 지원하지 않는 파일 형식")
            return False

        except Exception as e:
            print(f"❌ [{file_path}] Canonical URL 설정 실패: {str(e)}")
            return False

    def apply_og_tags(self, file_path: str, og_data: Dict[str, str]) -> bool:
        """Open Graph 태그 업데이트"""
        full_path = self.workspace_root / file_path

        if not full_path.exists():
            print(f"❌ 파일을 찾을 수 없음: {file_path}")
            return False

        try:
            content = full_path.read_text(encoding='utf-8')

            # HTML 파일 처리
            if file_path.endswith('.html'):
                modified = content

                for og_key, og_value in og_data.items():
                    # og:title, og:description, og:image 등
                    property_name = f"og:{og_key}" if not og_key.startswith('og:') else og_key

                    # 기존 태그 찾기
                    pattern = rf'<meta[^>]*property=["\']({property_name})["\'][^>]*/?>'

                    if re.search(pattern, modified, re.IGNORECASE):
                        # 기존 태그 업데이트
                        new_tag = f'<meta property="{property_name}" content="{og_value}" />'
                        modified = re.sub(pattern, new_tag, modified, flags=re.IGNORECASE)
                    else:
                        # 새 태그 추가 (</head> 앞에)
                        new_tag = f'    <meta property="{property_name}" content="{og_value}" />\n  </head>'
                        modified = re.sub(r'</head>', new_tag, modified, flags=re.IGNORECASE, count=1)

                full_path.write_text(modified, encoding='utf-8')
                print(f"✅ [{file_path}] Open Graph 태그 업데이트: {len(og_data)}개")
                return True

            # TSX 파일 처리 (Next.js)
            elif file_path.endswith('.tsx') or file_path.endswith('.ts'):
                modified = content

                # Next.js metadata의 openGraph 섹션 업데이트
                if 'openGraph:' in content:
                    # 기존 openGraph 업데이트
                    for og_key, og_value in og_data.items():
                        pattern = rf'({og_key}:\s*["\'])([^"\']+)(["\'])'
                        if re.search(pattern, content):
                            modified = re.sub(pattern, rf'\g<1>{og_value}\g<3>', modified)
                else:
                    # 새로운 openGraph 추가
                    og_lines = ['  openGraph: {']
                    for og_key, og_value in og_data.items():
                        og_lines.append(f'    {og_key}: "{og_value}",')
                    og_lines.append('  },')
                    og_block = '\n'.join(og_lines)

                    pattern = r'(export const metadata[^{]*\{)'
                    modified = re.sub(pattern, rf'\1\n{og_block}', content)

                full_path.write_text(modified, encoding='utf-8')
                print(f"✅ [{file_path}] Open Graph 태그 업데이트: {len(og_data)}개")
                return True

            print(f"⚠️  [{file_path}] 지원하지 않는 파일 형식")
            return False

        except Exception as e:
            print(f"❌ [{file_path}] Open Graph 태그 업데이트 실패: {str(e)}")
            return False

    def apply_action(self, action: Dict[str, Any]) -> bool:
        """단일 액션 적용"""
        action_type = action.get('action_type')
        target_file = action.get('target_file')

        # new_value는 최상위 또는 parameters 안에 있을 수 있음
        new_value = action.get('new_value')
        if not new_value and 'parameters' in action:
            new_value = action['parameters'].get('new_value')

        # parameters 추출
        parameters = action.get('parameters', {})

        print(f"\n🔧 액션 적용: {action_type} → {target_file}")

        if action_type == 'update_meta_title':
            success = self.apply_meta_title(target_file, new_value)
        elif action_type == 'update_meta_description':
            success = self.apply_meta_description(target_file, new_value)
        elif action_type == 'add_internal_link':
            success = self.apply_add_internal_link(target_file, parameters)
        elif action_type == 'update_canonical_url':
            canonical_url = parameters.get('canonical_url') or new_value
            success = self.apply_canonical_url(target_file, canonical_url)
        elif action_type == 'update_og_tags':
            og_data = parameters.get('og_data', {})
            success = self.apply_og_tags(target_file, og_data)
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
