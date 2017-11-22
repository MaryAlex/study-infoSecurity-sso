# Disallow pushing into master
branch=`git symbolic-ref HEAD`
if [ "$branch" = "refs/heads/master" ]; then
    echo "Direct commits to the branch master are not allowed"
    exit 1
fi

# Exit with tests status
exit $?
