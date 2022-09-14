for i in d e f g h i j k l m n o p; do
    printf "${i}"
    nx generate @nrwl/js:library lib-${i}
done