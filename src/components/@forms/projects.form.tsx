import React from 'react';
import {useFieldArray, useFormContext} from 'react-hook-form';

//
import {Input, Select, Checkbox, Textarea, Button, Upload} from '../@resuable';

import {TECHNOLOGIES_LIST} from '@/config';

const ProjectsForm = () => {
  const methods = useFormContext();

  return (
    <>
      <div className='grid grid-cols-2 gap-x-8 gap-y-4 items-center'>
        <Input
          name={'name'}
          label='Project Name'
          register={methods.register}
          placeholder='Project Name'
          rules={{
            maxLength: {
              value: 20,
              message: 'Max length is 20',
            },
            minLength: {
              value: 4,
              message: 'Min length is 4',
            },
          }}
          required
          errors={methods.formState.errors}
          wrapperClasses='col-span-2'
        />

        <Textarea
          type='textarea'
          name='description'
          label='Description'
          placeholder='Description'
          wrapperClasses='col-span-2'
          register={methods.register}
        />

        <Select
          label={'Technologies'}
          placeholder={'Select Technologies'}
          options={TECHNOLOGIES_LIST}
          formMethods={methods}
          name='technologies'
          required={{
            value: true,
            message: 'Field is required',
          }}
          multiple
        />

        <Input
          name={'url'}
          label='App live URL'
          register={methods.register}
          placeholder='Project Name'
          required
          errors={methods.formState.errors}
          wrapperClasses='col-span-1'
        />

        <Input
          name={'github'}
          label='Repository URL'
          register={methods.register}
          placeholder='Project Name'
          required
          errors={methods.formState.errors}
          wrapperClasses='col-span-1'
        />

        <Select
          label={'App Type'}
          placeholder={'Select'}
          options={[
            {
              label: 'Web App',
              value: 'webapp',
            },
            {
              label: 'Mobile',
              value: 'mobile',
            },
          ]}
          formMethods={methods}
          name='appType'
          required={{
            value: true,
            message: 'Please select app type',
          }}
        />

        <Checkbox
          label='Freelance'
          name='freelance'
          labelClasses='text-lg'
          formMethods={methods}
          required={{
            value: false,
            message: 'Field is required',
          }}
          wrapperClasses='col-span-2'
        />

        <Upload
          label='Upload Thumbnail'
          name='thumbnail'
          formMethods={methods}
          required={{
            value: true,
            message: 'Thumbnail is required',
          }}
        />

        <Upload
          label='Upload Images'
          name='images'
          formMethods={methods}
          multiple
        />
      </div>
    </>
  );
};

export default ProjectsForm;

//
