import { Form, Input, Button, Card, Typography, Row, Col } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const { Title, Text } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5'
    }}>
      <Card
        bordered={false}
        style={{ width: 800, borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        bodyStyle={{ padding: 0 }}
      >
        <Row>
          {/* Левая часть с иллюстрацией */}
          <Col span={12} style={{
            backgroundColor: '#dbeafe',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px'
          }}>
            <img
              src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-password-safety-measures_335657-3530.jpg"
              alt="Illustration"
              style={{ width: '100%', borderRadius: 8 }}
            />
          </Col>

          {/* Правая часть с формой */}
          <Col span={12} style={{ padding: '40px 50px' }}>
            <div style={{ textAlign: 'center', marginBottom: 30 }}>
              <Title level={2} style={{ marginBottom: 0 }}>Sign In</Title>
            </div>

            <Form
              layout="vertical"
              onFinish={onFinish}
              requiredMark="optional"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder="Enter your username" size="large" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
              >
                <Input placeholder="Enter your email" size="large" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  size="large"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>

              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'Please input your first name!' }]}
              >
                <Input placeholder="Enter your first name" size="large" />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Please input your last name!' }]}
              >
                <Input placeholder="Enter your last name" size="large" />
              </Form.Item>

              <Form.Item style={{ marginTop: 40 }}>
                <Button type="primary" htmlType="submit" size="large" block style={{ borderRadius: 8, height: 45 }}>
                  Sign In
                </Button>
              </Form.Item>

              <Form.Item>
                <Button type="default" size="large" block style={{ borderRadius: 8, height: 45 }}>
                  Create an account
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default LoginPage;