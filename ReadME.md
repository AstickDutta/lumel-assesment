# Lumel Assessment

This is a backend API for managing and analyzing sales data. It provides endpoints for data refresh, revenue calculations, and order management.

## Prerequisites

- **Node.js**: v18 or higher
- **PostgreSQL**: v14 or higher
- **npm**: v8 or higher

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AstickDutta/lumel-assesment.git
   cd lumel-assessment
  
# API Documentation

Please fine the api documentation for this assessment inside postamn collection there i have added all documentation for each and every api

# End points

 for calculate the revenue

 http://localhost:7001/api/analysis/revenue?startDate=2023-01-01&endDate=2023-12-31

 Get Analysis Total Revenue by category

 http://localhost:7001/api/analysis/revenue-by-category?startDate=2023-01-01&endDate=2023-12-31

 Get Analysis Total Revenue by region

  http://localhost:7001/api/analysis/revenue-by-region?startDate=2023-01-01&endDate=2023-12-31

  Post refresh data

  http://localhost:7001/api/refresh

  Calculate Revenue by Product

  http://localhost:7001/api/analysis/revenue-by-product?startDate=2024-01-01&endDate=2025-12-31
