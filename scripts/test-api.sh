#!/bin/bash
# API Testing Script

BASE_URL="http://localhost:3001/api"

echo "🧪 Testing Global Brand & Digital Expo API"
echo ""

# Test 1: Create User
echo "Test 1: Creating user..."
curl -X POST "$BASE_URL/users" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123",
    "role": "viewer"
  }'
echo -e "\n"

# Test 2: Get All Users
echo "Test 2: Getting all users..."
curl "$BASE_URL/users"
echo -e "\n"

# Test 3: Get All Products
echo "Test 3: Getting all products..."
curl "$BASE_URL/products"
echo -e "\n"

# Test 4: Get Featured Products
echo "Test 4: Getting featured products..."
curl "$BASE_URL/products/featured"
echo -e "\n"

echo "✅ API testing completed!"
echo ""
echo "Note: Make sure the backend server is running before testing."
