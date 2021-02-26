# 关系型数据库 Mysql
### 数据库（database）由多张表组成，每张表由行和列组成，行代表名称，列代表数据域
### 术语：
1. 数据库
2. 数据表
3. 列
4. 行
5. 冗余：降低性能，提高数据安全性
6. 主键：唯一的值，可用于查询数据
7. 外键：用于关联另外的表
8. 复合键：用于复合索引
9. 索引
10. 参照完整性：不允许引用不存在的实体

### 1、命令行启动/关闭数据库服务器
找到mysql/bin文件 mysqld --console  
mysql -u root -p进行连接  
关闭：mysqladmin -uroot shutdown

### 2、数据类型
#### 分三类： 数值、字符、日期/时间
1. 数值类型：TINYINT、SMALLINT、MEDIUMINT、INTEGER/INT、BIGINT、FLOAT、DOUBLE、DECIMAL
2. 日期类型：DATE、TIME、YEAR、DATETIME、TIMESTAMP
3. 字符类型：CHAR、VARCHAR、TINYBLOB、TINYTEXT、BLOB、TEXT、MEDIUMBLOB、MEDIUMTEXT、LONGBLOB、LONGTEXT

### 3、数据库操作
1. 创建数据库 CREATE TABLE table_name(column_name column_type)
2. 删除数据库 DROP TABLE table_name
3. 插入数据 INSERT INTO table_name( field1, field2,...fieldN )   VALUES   ( value1, value2,...valueN );
4. 查询数据 select * from runoob_tbl(返回表的所有数据) SELECT column_name,column_name FROM table_name [WHERE Clause] [LIMIT N][ OFFSET M]
5. 更新数据 UPDATE table_name SET field1=new-value1, field2=new-value2
6. 删除数据 DELETE FROM table_name [WHERE Clause] 不指定where将删除所有数据
7. LIKE 语句 与%一起使用，查询所有相关数据，不加%，等同于=
8. ORDER BY 排序
9. 分组 GROUP BY column_name
