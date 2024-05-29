import React, { useState } from 'react';
import "../Styles/AddMicroserviceForm.css"

export const AddMicroserviceForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    portNumber: '',
    status: 'online',
    link: '',
    serviceName: '',
    description: '',
    version: '',
    environment: '',
    dependencies: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation if needed
    onSubmit(formData);
  };

  const handleDependenciesChange = (e) => {
    const dependencies = e.target.value.split(',');
    setFormData({
      ...formData,
      dependencies
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Port Number</label>
        <input type="number" name="portNumber" value={formData.portNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
      <div>
        <label>Link</label>
        <input type="url" name="link" value={formData.link} onChange={handleChange} required />
      </div>
      <div>
        <label>Service Name</label>
        <input type="text" name="serviceName" value={formData.serviceName} onChange={handleChange} required />
      </div>
      <div>
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Version</label>
        <input type="number" name="version" value={formData.version} onChange={handleChange} required />
      </div>
      <div>
        <label>Environment</label>
        <input type="text" name="environment" value={formData.environment} onChange={handleChange} required />
      </div>
      <div>
        <label>Dependencies (comma separated)</label>
        <input type="text" name="dependencies" value={formData.dependencies.join(', ')} onChange={handleDependenciesChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

 
