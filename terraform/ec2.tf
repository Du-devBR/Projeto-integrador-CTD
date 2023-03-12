# Create launch configurations for React app and Spring Boot API instances
resource "aws_launch_configuration" "react_lc" {
  count                       = 1
  image_id                    = var.ami-type
  instance_type               = var.ec2-type
  key_name                    = var.ssh_key_name
  security_groups             = [aws_security_group.react_sg.id, aws_security_group.ssh_sg.id]
  associate_public_ip_address = true
  user_data                   = <<-EOF
    #!/bin/bash
    sudo apt-get update
    sudo apt-get install software-properties-common -y
    sudo add-apt-repository --yes --update ppa:ansible/ansible -y
    sudo apt-get install ansible -y
  EOF

}

resource "aws_launch_configuration" "spring_boot_lc" {
  count                       = 1
  image_id                    = var.ami-type
  instance_type               = var.ec2-type
  security_groups             = [aws_security_group.spring_boot_sg.id, aws_security_group.ssh_sg.id]
  key_name                    = var.ssh_key_name
  associate_public_ip_address = true
  user_data                   = <<-EOF
    #!/bin/bash
    sudo apt-get update
    sudo apt-get install software-properties-common -y
    sudo add-apt-repository --yes --update ppa:ansible/ansible -y
    sudo apt-get install ansible -y
  EOF

}

