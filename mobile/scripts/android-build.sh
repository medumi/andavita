#!/bin/sh
set -eu
mobile_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
export JAVA_HOME="${JAVA_HOME:-/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home}"
export ANDROID_HOME="${ANDROID_HOME:-/Users/micha/Library/Android/sdk}"
if [ ! -x "$JAVA_HOME/bin/java" ]; then
  echo 'Android Studio / Java fehlt. Siehe mobile/README.md.' >&2
  exit 1
fi
export PATH="$JAVA_HOME/bin:$ANDROID_HOME/platform-tools:$PATH"
cd "$mobile_root"
npm run sync
cd android
./gradlew assembleDebug --console=plain
