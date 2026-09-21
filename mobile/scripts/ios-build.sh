#!/bin/sh
set -eu
mobile_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
export DEVELOPER_DIR="${DEVELOPER_DIR:-/Applications/Xcode.app/Contents/Developer}"
if [ ! -x "$DEVELOPER_DIR/usr/bin/xcodebuild" ]; then
  echo 'Vollständiges Xcode fehlt. Siehe mobile/README.md.' >&2
  exit 1
fi
cd "$mobile_root"
npm run sync
xcodebuild -project ios/App/App.xcodeproj -scheme App -configuration Debug -destination 'generic/platform=iOS Simulator' -derivedDataPath build/ios CODE_SIGNING_ALLOWED=NO build
