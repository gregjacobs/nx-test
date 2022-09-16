i=6
while [ $i -lt 11 ]; do
    printf "${i}"
    nx generate @nrwl/js:library lib-with-dep-${i}
    i=$(($i+1));
done

# i=1
# while [ $i -lt 101 ]; do
#     printf "${i}"
#     nx generate @nrwl/js:library lib-${i}
#     i=$(($i+1));
# done