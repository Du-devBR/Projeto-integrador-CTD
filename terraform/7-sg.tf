resource "aws_security_group" "react_sg" {
  name_prefix = "react_sg"
  description = "Allow SSH and 80"
  ingress {
    description = "ssh port"
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port = 80
    to_port = 3000
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
  }
  tags = {
    Name = "react_sg"
  }
}

resource "aws_security_group" "spring_sg" {
  name_prefix = "spring_sg"
  description = "Allow SSH and 80"
  ingress {
    description = "ssh port"
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port = 8080
    to_port = 8080
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
  }
  tags = {
    Name = "spring_sg"
  }
}