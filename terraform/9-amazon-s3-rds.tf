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

# resource "aws_s3_bucket_public_access_block" "bucket-digitalbooking-grupo05" {
#   bucket = aws_s3_bucket.bucket-digitalbooking-grupo05.id

#   block_public_acls       = true
#   block_public_policy     = true
#   ignore_public_acls      = true
#   restrict_public_buckets = true
# }

resource "aws_s3_bucket_policy" "bucket-digitalbooking-grupo05" {
  bucket = aws_s3_bucket.bucket-digitalbooking-grupo05.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "uploadData"
        Action    = [
          "s3:PutObject",
          "s3:PutObjectAcl",
          "s3:GetObject",
          "s3:GetObjectAcl"
        ]
        Effect    = "Allow"
        Resource  = "${aws_s3_bucket.bucket-digitalbooking-grupo05.arn}/*"
        Principal = {
          AWS = [
            "arn:aws:iam::405378853534:user/pi5-grupo5"
          ]
        }
      },
      {
        Sid       = "readData"
        Action    = [
          "s3:GetObject",
          "s3:GetObjectAcl"
        ]
        Effect    = "Allow"
        Resource  = "${aws_s3_bucket.bucket-digitalbooking-grupo05.arn}/*"
        Principal = {
          AWS = [
            "*"
          ]
        }
      }
    ]
  })
}
