variable "name" {
  default = "T5-Grupo5-PI-DigitalBookinga"
}

variable "region" {
  default = "us-east-1"
}
variable "ssh_key_name" {
  default = "t5-grupo5"
}

variable "ami-type" {
  default = "ami-0dfcb1ef8550277af"
}

variable "ec2-type" {
  default = "t2.micro"
}

variable "ansible_install_script" {
  default = <<-EOF
    #!/bin/bash
    sudo apt-get update
    sudo apt-get install software-properties-common -y
    sudo add-apt-repository --yes --update ppa:ansible/ansible -y
    sudo apt-get install ansible -y
  EOF
}
