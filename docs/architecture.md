## Architecture

YumDrop follows a **modular, service-oriented architecture** designed for scalability and maintainability.

### Components

- **Frontend** (React + Bootstrap 5)
  - Provides a dynamic, responsive UI
  - Communicates with the backend via REST APIs
  - Handles routing, authentication, and form validation

- **Backend** (Spring Boot)
  - Exposes RESTful APIs for user actions (browsing, cart, ordering, etc.)
  - Contains business logic and handles validation
  - Integrates with MongoDB for data persistence
  - Uses AWS SDK to store and retrieve images from S3

- **Database** (MongoDB)
  - Stores user data, food items, cart and order information
  - Document-oriented design for fast querying and flexibility

- **Cloud Storage** (AWS S3)
  - Hosts uploaded food images
  - Secure and scalable file storage solution



