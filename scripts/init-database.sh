#!/bin/bash
# Database Initialization Script

echo "🗄️  Initializing Global Brand & Digital Expo Database..."

# Check if MySQL is running
if ! command -v mysql &> /dev/null; then
    echo "❌ MySQL is not installed or not in PATH"
    exit 1
fi

# Database configuration
DB_NAME="global_brand_expo"
DB_USER="root"
DB_PASS="your_password"  # Change this to your MySQL root password

echo "📋 Creating database: $DB_NAME"

# Create database
mysql -u"$DB_USER" -p"$DB_PASS" -e "CREATE DATABASE IF NOT EXISTS \`$DB_NAME\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

if [ $? -eq 0 ]; then
    echo "✅ Database created successfully"
else
    echo "❌ Failed to create database"
    exit 1
fi

echo "📝 Executing schema..."

# Execute schema.sql
mysql -u"$DB_USER" -p"$DB_PASS" "$DB_NAME" < database/schema.sql

if [ $? -eq 0 ]; then
    echo "✅ Schema executed successfully"
else
    echo "❌ Failed to execute schema"
    exit 1
fi

echo "🎉 Database initialization completed!"
echo ""
echo "Next steps:"
echo "  1. Update backend/.env with your database credentials"
echo "  2. Run: npm run migration:run"
echo "  3. Start the application: npm run start:dev"
