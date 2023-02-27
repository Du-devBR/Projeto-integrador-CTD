variable "name" {
  default = "${var.NAME}"
}
variable "region" {
  default = "${var.AWS_DEFAULT_REGION}"
}
variable "access_key" {
  default = "${var.AWS_ACCESS_KEY_ID}"
}
variable "secret_key" {
  default = "${var.AWS_SECRET_ACCESS_KEY}"
}
variable "token" {
  default = "${var.TOKEN}"
}
variable "ssh_key_name" {
  default = "${var.SSH_KEY_NAME}"
}
variable "vpc_cidr" {
  default = "${var.VPC_CIDR}"
}
variable "vpc_cidr_private_a" {
  default = "${var.VPC_CIDR_PRIVATE_A}"
}
variable "vpc_cidr_private_b" {
  default = "${var.VPC_CIDR_PRIVATE_B}"
}
variable "vpc_cidr_public_a" {
  default = "${var.VPC_CIDR_PUBLIC_A}"
}
variable "vpc_cidr_puplic_b" {
  default = "${var.VPC_CIDR_PUBLIC_B}"
}
variable "ami-type" {
  default = "ami-0dfcb1ef8550277af"
}
variable "ec2-type" {
  default = "t2.micro"
}
variable "mysql-instance" {
  default = "${var.MYSQL_INSTANCE}"
}
variable "mysql-user" {
  default = "${var.MYSQL_USER}"
}
variable "mysql-password" {
  default = "${var.MYSQL_PASSWORD}"
}
