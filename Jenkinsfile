pipeline {
  agent {
    docker {
      image 'node:8.10.0'
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
