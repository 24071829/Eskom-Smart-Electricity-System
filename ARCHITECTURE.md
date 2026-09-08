# System Architecture

## Component Interaction

### Frontend Architecture
- React components with hooks
- Redux state management
- API service layer
- Responsive Material-UI components
- Real-time WebSocket connections

### Backend Architecture
- Express.js microservices
- MongoDB data persistence
- Redis caching layer
- JWT authentication
- Message queue for async operations

### Database Schema

Key collections:
- Users (authentication, profiles)
- Customers (customer information)
- Meters (metering data)
- Outages (outage records)
- Faults (fault tickets)
- Notifications (user notifications)
- AuditLogs (system audit trail)

## Data Flow

1. User → Frontend (React App)
2. Frontend → API Gateway (Express API)
3. API Gateway → Microservices
4. Microservices → Database (MongoDB)
5. Cache Layer (Redis) for frequently accessed data
6. Async Operations (Message Queue)

## Security Flow

1. User Login → JWT Token Generation
2. API Requests → JWT Validation
3. Role-based authorization check
4. Request processing
5. Audit logging
6. Response to client
