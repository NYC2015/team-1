git pull
rm name
for i in {1..500}; do date +%s | md5sum >> name; done
#cp -f /home/antony/stern.txt name                                                                                                  
git commit -am "stern"
git push