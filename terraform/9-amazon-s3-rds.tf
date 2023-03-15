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
