pipeline {
  agent {
    docker {
      image 'node:8.10'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh 'npm install && npm test'
      }
    }
  }
}