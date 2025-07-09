
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Thêm logic gửi form (ví dụ: API call) tại đây
        alert('Thank for your contacting');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Contact</h1>
            <div className="flex flex-row">
                <div className="basis-1/3">
                    <p className="text-2xl">Information </p>
                    <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-gray-600" />
                        <p className='text-gray-600'>
                            Linh Trung Ward, Thu Duc City
                            <br />
                            Ho Chi Minh City, Vietnam
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-gray-600" />
                        <p className='text-gray-600'>+84 777 xxx xxx</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-gray-600" />
                        <p className='text-gray-600'>tamnhu11204@gmail.com</p>
                    </div>
                </div>
                {/* Form liên hệ */}
                <div className="basis-2/3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Leave your information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name..."
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full"
                                    required
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email..."
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full"
                                    required
                                />
                                <Textarea
                                    name="message"
                                    placeholder="Enter your message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-32"
                                    required
                                />
                                <Button type="submit" className="w-full btn-primary">
                                    Send
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;