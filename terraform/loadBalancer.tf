# Create load balancer and target groups
resource "aws_lb" "app_lb" {
  name               = "app-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.lb_sg.id]

  subnets = [
    aws_subnet.public_subnet_1a.id,
    aws_subnet.public_subnet_1b.id
  ]

  tags = {
    Name = "app-lb"
  }
}

resource "aws_lb_target_group" "react_tg" {
  port             = 80
  protocol         = "HTTP"
  target_type      = "instance"
  vpc_id           = aws_vpc.main_vpc.id
  health_check {
    path = "/"
  }
}

resource "aws_lb_target_group" "spring_boot_tg" {
  port             = 80
  protocol         = "HTTP"
  target_type      = "instance"
  vpc_id           = aws_vpc.main_vpc.id
  health_check {
    path = "/"
  }
}

resource "aws_lb_listener" "react_listener" {
  load_balancer_arn = aws_lb.app_lb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.react_tg.arn
  }
}

resource "aws_lb_listener" "spring_boot_listener" {
  load_balancer_arn = aws_lb.app_lb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.spring_boot_tg.arn
  }
}
