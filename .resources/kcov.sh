cd /home/circleci/project/ &&
echo "---START_LIST---"
ls target/debug/deps
echo "---END_LIST---"
for file in target/debug/deps/aleo*-*[^\.d];
  do
  
