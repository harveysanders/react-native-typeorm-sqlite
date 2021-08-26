import React from 'react';
import { Button } from 'react-native';
import { mockContact } from '../mocks/Contact';
import { mockLocation } from '../mocks/Location';

export type EntityType = 'Location' | 'Contact';

interface CreateButtonProps {
  type: EntityType;
}
export const CreateButton: React.FC<CreateButtonProps> = (props) => {
  const { type } = props;

  const handleCreate = () => {
    const item = createItem(type);
    console.log({ [type]: item });
  };

  return (
    <Button title={`Create ${type}`} onPress={handleCreate}>
      'Create'
    </Button>
  );
};

const createItem = (type: EntityType) => {
  const creators: Record<EntityType, () => any> = {
    Location: mockLocation,
    Contact: mockContact,
  };
  return creators[type]();
};
