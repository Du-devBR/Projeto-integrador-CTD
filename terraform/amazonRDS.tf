resource "aws_db_subnet_group" "mysql_subnet_group" {
  name        = "mysql-subnet-group"
  subnet_ids  = [aws_subnet.private_subnet_1a.id, aws_subnet.private_subnet_1b.id]
  description = "Subnet group for MySQL RDS"
}

resource "aws_db_instance" "mysql_instance" {
  identifier             = "mysql-instance"
  allocated_storage      = 10
  engine                 = "mysql"
  engine_version         = "8.0.27"
  instance_class         = "db.t2.micro"
  name                   = var.mysql-instance
  username               = var.mysql-user
  password               = var.mysql-password
  db_subnet_group_name    = aws_db_subnet_group.mysql_subnet_group.name
  vpc_security_group_ids  = [aws_security_group.mysql_sg.id]
  skip_final_snapshot    = true
  publicly_accessible    = false
}
