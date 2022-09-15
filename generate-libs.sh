i=1
while [ $i -lt 101 ]; do
    printf "${i}"
    nx generate @nrwl/js:library lib-${i}
    i=$(($i+1));
done