output "instance_react_public_ip" {
  value = aws_instance.react_lc.public_ip
}

output "instance_spring_public_ip" {
  value = aws_instance.spring_lc.public_ip
}

# output "s3_bucket_info" {
#   value = aws_s3_bucket.bucket-digitalbooking-grupo05.website_domain
# }