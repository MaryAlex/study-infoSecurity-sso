#!/usr/bin/env bash
# Disallow pushing into master
branch=`git symbolic-ref HEAD`
if [ "$branch" = "refs/heads/master" ]; then
    echo "Direct push to the branch master are not allowed"
    exit 1
fi

# Exit with tests status
exit $?
