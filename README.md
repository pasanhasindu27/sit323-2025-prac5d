# sit323-2025-prac5d
# SIT323 5.2D - Dockerised Microservice Deployment to Google Artifact Registry

This project demonstrates deploying a Dockerised microservice (from Assignment 5.1P) to Google Cloud Artifact Registry.

📂 **Repository**  
https://github.com/my-username/sit323-2025-prac5d

## 🛠️ Deployment Process

### 1. Repository Setup
- Created GitHub repository: `sit323-2025-prac5d`
- Cloned repository locally
- Initialized project directory

### 2. Docker Image Tagging

docker tag calculator:latest us-central1-docker.pkg.dev/sit323/calculator-repo/calculator:latest
3. Docker Authentication

gcloud auth print-access-token | docker login -u oauth2accesstoken --password-stdin us-central1-docker.pkg.dev
4. Image Deployment

docker push us-central1-docker.pkg.dev/sit323/calculator-repo/calculator:latest
5. Verification

docker run -d -p 4000:4000 us-central1-docker.pkg.dev/sit323/calculator-repo/calculator:latest
-d: Runs container in background

-p 4000:4000: Maps container port to local port

6. GitHub Submission

git add .
git commit -m "Completed Artifact Registry deployment"
git push origin main
💻 Usage Instructions
To run the container:


docker run -d -p 4000:4000 us-central1-docker.pkg.dev/sit323/calculator-repo/calculator:latest
Access the microservice:
http://localhost:4000

📌 Key Steps Demonstrated
Proper Docker image tagging for Artifact Registry

Secure authentication with Google Cloud

Successful image publication

Verification of deployed image

Complete documentation in GitHub repository
