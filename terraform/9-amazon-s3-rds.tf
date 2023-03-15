resource "aws_s3_bucket" "bucket-digitalbooking-grupo05" {
  bucket = "bucket-digitalbooking-grupo05"
  tags = {
    Name        = "bucket-digitalbooking-grupo05"
    Environment = "dev"
  }
}

resource "aws_s3_bucket_acl" "bucket-digitalbooking-grupo05" {
  bucket = aws_s3_bucket.bucket-digitalbooking-grupo05.id

  acl = "private"
}

resource "aws_s3_bucket_object" "example_object" {
  bucket = aws_s3_bucket.bucket-digitalbooking-grupo05.id
  key    = "example-object.txt"
  content = "Hello, world!"
}

# resource "aws_s3_bucket_public_access_block" "example_public_access_block" {
#   bucket = aws_s3_bucket.bucket-digitalbooking-grupo05.id

#   block_public_acls       = true
#   block_public_policy     = true
#   ignore_public_acls      = true
#   restrict_public_buckets = true
# }
