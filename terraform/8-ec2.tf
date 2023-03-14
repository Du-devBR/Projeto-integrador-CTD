# Create launch configurations for React app and Spring Boot API instances
resource "aws_instance" "react_lc" {
  ami                         = var.ami-type
  instance_type               = var.ec2-type
  key_name                    = var.ssh_key_name
  associate_public_ip_address = true
  user_data                   = var.ansible_install_script
  vpc_security_group_ids = [
    aws_security_group.react_sg.id,
    aws_security_group.sg_acesso_ssh_publico.id
  ]
  tags = {
    "Name" = "grupo05-front-ec2"
  }
}

resource "aws_instance" "spring_lc" {
  ami                         = var.ami-type
  instance_type               = var.ec2-type
  key_name                    = var.ssh_key_name
  associate_public_ip_address = true
  user_data                   = var.ansible_install_script
  vpc_security_group_ids = [
    aws_security_group.spring_sg.id,
    aws_security_group.sg_acesso_ssh_publico.id

  ]
  tags = {
    "Name" = "grupo05-back-ec2"
  }

}
