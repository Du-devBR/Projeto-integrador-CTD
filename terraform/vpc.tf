resource "aws_vpc" "main_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "main_vpc"
  }
}

resource "aws_subnet" "private_subnet_1a" {
  vpc_id     = aws_vpc.main_vpc.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-east-1a"
  tags = {
    Name = "private-subnet-1a"
  }
}

resource "aws_subnet" "private_subnet_1b" {
  vpc_id     = aws_vpc.main_vpc.id
  cidr_block = "10.0.2.0/24"
  availability_zone = "us-east-1b"
  tags = {
    Name = "private-subnet-1b"
  }
}


resource "aws_subnet" "public_subnet_1a" {
  cidr_block = "10.0.3.0/24"
  availability_zone = "us-east-1a"
  vpc_id = aws_vpc.main_vpc.id
  map_public_ip_on_launch = true
}

resource "aws_subnet" "public_subnet_1b" {
  cidr_block = "10.0.4.0/24"
  availability_zone = "us-east-1b"
  vpc_id = aws_vpc.main_vpc.id
  map_public_ip_on_launch = true
}
