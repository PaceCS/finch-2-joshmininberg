#!/bin/sh

dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
open -a Terminal

osascript <<END
tell application "Terminal"
    do script "cd $dir/../../..; ./node_modules/.bin/babel sound.js --out-file $dir/soundES5.js; ./runJS.sh $dir/soundES5.js"
end tell
END
