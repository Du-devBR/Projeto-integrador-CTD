resource "aws_security_group" "ssh_sg" {
  name_prefix = "ssh-"
  description = "Allow SSH"
  ingress {
    description = "ssh port"
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = [var.vpc_cidr_block]
  }
  egress {
    from_port = 0
    to_port = 0
    protocol = -1
    cidr_blocks = [var.vpc_cidr_block]
  }
  tags = {
    Name = "ssh-sg"
  }
}

resource "aws_security_group" "lb_sg" {
  name_prefix = "lb-sg-"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "react_sg" {
  name_prefix = "react-"
  description = "Allow HTTP"
  ingress {
    from_port = 80
    to_port = 3000
    protocol = "tcp"
    cidr_blocks = [var.vpc_cidr_block]
  }
  egress {
    from_port = 0
    to_port = 0
    protocol = -1
    cidr_blocks = [var.vpc_cidr_block]
  }
  tags = {
    Name = "react-sg"
  }
}

resource "aws_security_group" "mysql_sg" {
  name_prefix = "mysql-"
  description = "Allow access to RDS MySQL from EC2 instances"

  ingress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
  }
  egress {
    from_port = 0
    to_port = 0
    protocol = -1
    cidr_blocks = [var.vpc_cidr_block]
  }
  tags = {
    Name = "mysql-sg"
  }
}

resource "aws_security_group" "spring_boot_sg" {
  name_prefix = "spring-boot"
  description = "Allow Spring Boot port"
  ingress {
    from_port = 80
    to_port = 8080
    protocol = "tcp"
    cidr_blocks = [var.vpc_cidr_block]
  }
  egress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
  }
  tags = {
    Name = "spring-boot-sg"
  }
}
