for i in q r s t u v; do
    printf "${i}"
    nx generate @nrwl/js:library lib-${i}
done