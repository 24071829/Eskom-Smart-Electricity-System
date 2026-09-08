# Deployment Guide

## Prerequisites

1. Node.js 18+ installed
2. MongoDB database configured
3. Redis cache server running
4. Docker installed (for containerization)
5. GitHub account with SSH keys configured

## Frontend Deployment

### Local Development
```bash
cd frontend
npm install
npm start
```

### Production Build
```bash
cd frontend
npm install
npm run build
```

The build files will be in `frontend/build/`

## Backend Deployment

### Local Development
```bash
cd backend
npm install
npm run dev
```

### Production Setup
```bash
cd backend
npm install
npm run start
```

## Docker Deployment

### Build Frontend Image
```bash
cd frontend
docker build -t eskom-frontend:latest .
```

### Build Backend Image
```bash
cd backend
docker build -t eskom-backend:latest .
```

### Run Containers
```bash
docker-compose up -d
```

## Environment Configuration

Create `.env` file with:
```
MONGODB_URI=mongodb://localhost:27017/eskom
JWT_SECRET=your_secret_key
PORT=5000
REACT_APP_API_URL=http://localhost:5000
NODE_ENV=production
```

## Database Setup

```bash
# Connect to MongoDB
mongo

# Create database
use eskom

# Create collections with indexes
db.createCollection("users")
db.users.createIndex({ email: 1 }, { unique: true })
```

## Monitoring

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API Docs: http://localhost:5000/api-docs

## Backup & Recovery

```bash
# Backup MongoDB
mongodump --uri "mongodb://localhost:27017/eskom" --out /backup/

# Restore MongoDB
mongorestore --uri "mongodb://localhost:27017/eskom" /backup/
```

## Troubleshooting

### Port Already in Use
```bash
# Find and kill process
lsof -i :5000
kill -9 <PID>
```

### Database Connection Error
- Ensure MongoDB is running
- Check connection string in .env
- Verify database permissions

### API Connection Issues
- Check CORS settings
- Verify API URL in frontend config
- Check backend logs
