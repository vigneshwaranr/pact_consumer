pipeline {
  agent {
    docker {
      image 'node:8.10'
    }
    
  }
  stages {
    stage('Lint') {
      steps {
        sh 'npm lint'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}