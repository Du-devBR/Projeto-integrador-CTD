provider "aws" {
  region = var.region
}

resource "aws_key_pair" "terraform_aws_key" {
  key_name   = var.ssh_key_name
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCqLEWkOfpLT0RqL+rdJROjDODQRi4G2QU5AQEeEC3swVWL4Y6YcFnsrKLtFayxzKz6I5HqOBO0oKFKm059nSHMV+slrrDgta+ua3WeP+20sAo6yDBbNL98Qs0mMwyFzlpsumHZQES40SU8uM9CEH26VHAQxQN2yJliPhRW0TrtR5s6lJg4mYfqtPb1XIHRSUhS3v6cLYJ3Oj4SOpNBsp8dnvHHat9L2yLxHTl6Bm6vxSxq2S3GEFivX8IuGxjc4T+lgSFkqPntMODsLU7EKluP+scVtBxcQIsK4+2Ob6AD3WbhuNWLMBqBlEBECWZ1bliydYJA4PkxJ+g6frs13w//yPTxIlg09I7gtkKCFq4VQxnuZr36pL6WqHeup3RLXe3e130ng29LGIxE5qwyXEfn3JnCm4uAuoCxCQliuLrStgtpeKMPLi6SDpMUZ+wf25LOW7p8UoEpEWBgRmARi326MgrruSKxXPacVvfJQMyYFX1qs7YQ/P698o3C7f0xktk= carlosfilho@helena"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.30.0"
    }
  }

  required_version = "~> 1.0"
}