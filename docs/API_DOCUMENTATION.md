# 📚 API 文档

> **版本**: v1.0  
> **基础URL**: `http://localhost:3001/api`

---

## 🔐 认证

目前所有API都是公开的。计划在下个版本添加JWT认证。

---

## 👥 用户管理

### 创建用户
```http
POST /api/users
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123",
  "role": "viewer"
}
```

### 获取所有用户
```http
GET /api/users
```

### 获取单个用户
```http
GET /api/users/:id
```

### 更新用户
```http
PATCH /api/users/:id
Content-Type: application/json

{
  "username": "newusername",
  "role": "admin"
}
```

### 删除用户
```http
DELETE /api/users/:id
```

---

## 🛍️ 产品管理

### 创建产品
```http
POST /api/products
Content-Type: application/json

{
  "name": "测试产品",
  "nameEn": "Test Product",
  "slug": "test-product",
  "categoryId": 1,
  "sku": "SKU001",
  "description": "这是一个测试产品",
  "descriptionEn": "This is a test product",
  "price": 99.99,
  "costPrice": 50.00,
  "stock": 100,
  "isActive": true,
  "isFeatured": true,
  "images": ["image1.jpg", "image2.jpg"],
  "specifications": {
    "color": "red",
    "size": "M"
  }
}
```

### 获取所有产品
```http
GET /api/products
```

### 按分类筛选产品
```http
GET /api/products?categoryId=1
```

### 获取精选产品
```http
GET /api/products/featured
```

### 获取单个产品
```http
GET /api/products/:id
```

### 通过Slug获取产品
```http
GET /api/products/slug/:slug
```

### 更新产品
```http
PATCH /api/products/:id
Content-Type: application/json

{
  "name": "新产品名称",
  "price": 199.99
}
```

### 删除产品
```http
DELETE /api/products/:id
```

---

## 📊 响应格式

### 成功响应
```json
{
  "id": 1,
  "username": "testuser",
  "email": "test@example.com",
  "role": "viewer",
  "isActive": true,
  "createdAt": "2026-03-14T10:00:00.000Z",
  "updatedAt": "2026-03-14T10:00:00.000Z"
}
```

### 错误响应
```json
{
  "statusCode": 404,
  "message": "User with ID 999 not found",
  "error": "Not Found"
}
```

---

## 🧪 测试示例

### 使用curl测试

#### 创建用户
```bash
curl -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

#### 获取所有用户
```bash
curl http://localhost:3001/api/users
```

#### 获取所有产品
```bash
curl http://localhost:3001/api/products
```

#### 获取精选产品
```bash
curl http://localhost:3001/api/products/featured
```

---

## 📈 性能优化

- 使用索引优化查询
- 分页支持（计划中）
- 缓存支持（计划中）
- 查询优化（计划中）

---

## 🔜 即将推出的API

### 展会管理
- GET /api/exhibitions
- POST /api/exhibitions
- GET /api/exhibitions/:id
- PATCH /api/exhibitions/:id
- DELETE /api/exhibitions/:id

### 线索管理
- GET /api/leads
- POST /api/leads
- GET /api/leads/:id
- PATCH /api/leads/:id
- DELETE /api/leads/:id

### 客户管理
- GET /api/customers
- POST /api/customers
- GET /api/customers/:id
- PATCH /api/customers/:id
- DELETE /api/customers/:id

---

*文档版本: v1.0*  
*最后更新: 2026-03-14*
