import React, { useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Image from 'components/atoms/image/Image';
import Input from 'components/atoms/input/Input';
import Button from 'components/atoms/button/Button';
import Textarea from 'components/atoms/textarea/Textarea';
import MetaTags from 'components/molecules/metaTags/MetaTags';

const ContactPage = () => {
  return (
    <div className={'mt-88 container pb-96'}>
      <MetaTags title={'Kontakta oss'} />
      {PAGE.title && (
        <h1 className={classNames('font-bold text-48')}>{PAGE.title}</h1>
      )}
      <ContactOfficesGrid className={'mt-32'} offices={PAGE.offices} />
      <ContactForm className={'mt-88 max-w-[592px]'} />
    </div>
  );
};

export default ContactPage;

const ContactOfficesGrid = ({ className, offices }) => {
  return (
    <div
      className={classNames(
        className,
        'grid gap-y-32 grid-cols-12 sm:gap-x-32'
      )}
    >
      {offices.map((office, index) => {
        return (
          <div
            key={index}
            className={classNames('col-span-12 sm:col-span-4', 'flex flex-col')}
          >
            <div className={'h-[270px] relative'}>
              <Image
                alt="entity"
                src={office?.image?.large?.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h4 className={classNames('font-bold text-32 mt-38')}>
              {office.title}
            </h4>
            <span className={classNames('mt-16')}>{office.address}</span>
            <span>{office.city}</span>
            <a className={classNames('mt-16')} href={`tel:${office.number}`}>
              {office.number}
            </a>
            <a href={`mailto:${office.email}`}>{office.email}</a>
          </div>
        );
      })}
    </div>
  );
};

const ContactForm = ({ className }) => {
  const [responseText, setResponseText] = useState('');
  const responseTextError = 'Något gick fel, skicka ett mail till ';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setResponseText('Skickar...');
    emailjs
      .send('service_2kc2zo9', 'template_z4wri0b', data, 'tI7f-054IGMK-1sNL')
      .then(
        () => {
          reset();
          setResponseText('Tack för din fråga, vi återkommer så snabbt vi kan');
        },
        () => {
          setResponseText(responseTextError);
        }
      );
  };

  return (
    <div className={classNames(className)}>
      <h2 className={classNames('font-bold text-48')}>Hör av dig!</h2>
      <p className={classNames('mt-16 text-riverBed')}>
        Fyll i formuläret så hör vi av oss så fort vi kan.
      </p>
      <form
        className={classNames('flex flex-col mt-34')}
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className={classNames('text-heavyMetal')}>Ditt namn</span>
        <Input className={'mt-8'} placeholder={'Namn'} {...register('name')} />
        <span className={classNames('mt-32 text-heavyMetal')}>Din email *</span>
        <Input
          className={'mt-8'}
          placeholder={'Email'}
          autoComplete={'email'}
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email i rätt format krävs',
            },
          })}
        />
        {errors?.email && <span>{errors.email?.message}</span>}
        <span className={classNames('mt-32 text-heavyMetal')}>Din fråga *</span>
        <Textarea
          className={'mt-8'}
          rows="8"
          resizeType={'vertical'}
          placeholder="Fråga..."
          {...register('message', {
            required: 'Frågefältet kan inte vara tomt',
          })}
        />
        {errors?.message && (
          <span className="mt-8">{errors.message?.message}</span>
        )}
        {responseText && (
          <div className="mt-8">
            <span>{responseText} </span>
            {responseText === responseTextError && (
              <a
                className="underline"
                href={`mailto:hello@nordicoutdooradventures.com`}
              >
                hello@nordicoutdooradventures.com
              </a>
            )}
          </div>
        )}
        <Button
          type="submit"
          disabled={responseText === 'Skickar...'}
          className={classNames('mt-32 mr-auto')}
        >
          Skicka
        </Button>
      </form>
    </div>
  );
};

const PAGE = {
  title: 'Kontakta oss',
  offices: [
    {
      title: 'Stockholm',
      address: 'Östermalmsgatan 26A',
      city: 'Stockholm',
      number: '08-123 12 12',
      email: 'hello@nordicoutdooradventures.com',
      image: {
        large: {
          url: 'https://storage.googleapis.com/strapi-uploads-prod/stockholm_2x_4469dbdaf5/stockholm_2x_4469dbdaf5.webp',
        },
      },
    },
    {
      title: 'Askersund',
      address: 'Borgmästarholmen',
      city: 'Askersund',
      number: '0583-71 13 30',
      email: 'hello@nordicoutdooradventures.com',
      image: {
        large: {
          url: 'https://storage.googleapis.com/strapi-uploads-prod/askersund_2x_cb89d8dcfb/askersund_2x_cb89d8dcfb.webp',
        },
      },
    },
  ],
};
