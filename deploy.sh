yarn build
openssl aes-256-cbc -K $encrypted_7a9e8feb31e6_key -iv $encrypted_7a9e8feb31e6_iv -in deploy_key.enc -out ./deploy_key -d
eval "$(ssh-agent -s)"
chmod 600 ./deploy_key
ssh-add ./deploy_key
rsync -r --delete-after --quiet --rsh='ssh -p60000' $TRAVIS_BUILD_DIR/dist/ piotr@51.75.74.29:/var/www/jablonski.tech/
