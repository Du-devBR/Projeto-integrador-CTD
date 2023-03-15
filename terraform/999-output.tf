output "instance_react_public_ip" {
  value = aws_instance.react_lc.public_ip
}

output "instance_spring_public_ip" {
  value = aws_instance.spring_lc.public_ip
}

output "s3_object_url" {
  value = "https://${aws_s3_bucket.bucket-digitalbooking-grupo05.bucket_regional_domain_name}/${aws_s3_bucket_object.example_object.key}"
}