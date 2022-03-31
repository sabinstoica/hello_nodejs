pipeline {
    agent any
        stages {
            stage ('Deploy') {
                steps {
                    // Get the repo from GitHub
                    git 'https://github.com/sabinstoica/hello_nodejs.git'
                    
                    // Do the docker image and container cleanup before starting the deployment
                    sh "./cleanup.sh"
                    
                    // Create the nodejs docker image and run it in a container
                    sh "docker build -t $image . "
                    sh "docker run -p $port -d --name $container $image"
                }
            }
        }
}
