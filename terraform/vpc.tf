resource "aws_vpc" "main_vpc" {
  cidr_block = var.vpc_cidr
  tags = {
    Name = "main_vpc"
  }
}

resource "aws_subnet" "private_subnet_1a" {
  vpc_id     = aws_vpc.main_vpc.id
  cidr_block = var.vpc_cidr_private_a
  availability_zone = "us-east-1a"
  tags = {
    Name = "private-subnet-1a"
  }
}

resource "aws_subnet" "private_subnet_1b" {
  vpc_id     = aws_vpc.main_vpc.id
  cidr_block = var.vpc_cidr_private_b
  availability_zone = "us-east-1b"
  tags = {
    Name = "private-subnet-1b"
  }
}


resource "aws_subnet" "public_subnet_1a" {
  cidr_block = var.vpc_cidr_public_a
  availability_zone = "us-east-1a"
  vpc_id = aws_vpc.main_vpc.id
  map_public_ip_on_launch = true
}

resource "aws_subnet" "public_subnet_1b" {
  cidr_block = var.vpc_cidr_puplic_b
  availability_zone = "us-east-1b"
  vpc_id = aws_vpc.main_vpc.id
  map_public_ip_on_launch = true
}
