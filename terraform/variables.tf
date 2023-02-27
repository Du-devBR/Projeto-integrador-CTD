variable "name" {
  default = "${NAME}"
}
variable "region" {
  default = "${AWS_DEFAULT_REGION}"
}
variable "access_key" {
  default = "${AWS_ACCESS_KEY_ID}"
}
variable "secret_key" {
  default = "${AWS_SECRET_ACCESS_KEY}"
}
variable "token" {
  default = "${TOKEN}"
}
variable "ssh_key_name" {
  default = "${SSH_KEY_NAME}"
}
variable "vpc_cidr" {
  default = "${VPC_CIDR}"
}
variable "vpc_cidr_private_a" {
  default = "${VPC_CIDR_PRIVATE_A}"
}
variable "vpc_cidr_private_b" {
  default = "${VPC_CIDR_PRIVATE_B}"
}
variable "vpc_cidr_public_a" {
  default = "${VPC_CIDR_PUBLIC_A}"
}
variable "vpc_cidr_puplic_b" {
  default = "${VPC_CIDR_PUBLIC_B}"
}
variable "ami-type" {
  default = "ami-0dfcb1ef8550277af"
}
variable "ec2-type" {
  default = "t2.micro"
}
variable "mysql-instance" {
  default = "${MYSQL_INSTANCE}"
}
variable "mysql-user" {
  default = "${MYSQL_USER}"
}
variable "mysql-password" {
  default = "${MYSQL_PASSWORD}"
}
