"use client";
import NotFound from '@/app/not-found'
import ProductFeatureCard from './productFeatureCard';
import { Button } from '@nextui-org/react';
import { FaShopify } from 'react-icons/fa';
import Link from 'next/link';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { Divider } from '@nextui-org/react';


export default function App({ params }: { params: { slug: string } }) {
  const productKey = params.slug.toLowerCase().split("-").reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
  
  var products = require('../data/products.json')
  const product = products[productKey]

  if(!product){
    return (
      <NotFound/>
    )
  }

  const specListColumns = [
    {
      "key": "spec",
      "label": "Specification"
    },
    {
      "key": "description",
      "label": "Description"
    }
  ]

  return (
    <main className='container lg:max-w-7xl mx-auto shadow-xl bg-slate-200/[0.75]'>
      <div className='flex flex-col lg:grid lg:grid-cols-5 gap-4 md:gap-8 h-screen items-center pt-16 md:pt-16 p-6 md:p-12'>
        <div className='relative lg:col-span-3 flex w-full h-full lg:order-last justify-center rounded-lg'>
          <img className="absolute object-contain h-full" src={product.imageSrc} alt="The Nomad Series" />
        </div>
        <div className='lg:col-span-2 lg:pr-4'>
          <div className='text-3xl lg:text-4xl text-start mb-6'>
            <h2 className='font-semibold mb-2'>
              {product.title}
            </h2>
          </div>  
          <div className='text-xl lg:text-2xl text-start mb-6'>
            <h2 className='font-semibold'>
              {product.taglineTitle}
            </h2>
            <p className='text-lg lg:text-xl'>{product.taglineSubtitle}</p>
          </div>  
          <div className='mb-4'>
            <h2 className='text-lg lg:text-xl text-start font-semibold mb-2'>
              {product.descriptionShort.title}
            </h2>
            <p className='text-justify'>
              {product.descriptionShort.content}
            </p>
          </div>  
          <div className='mb-4'>
            <Button size="md" as={Link} href="#" radius="md" variant="flat" color="primary"
              className="dark:brightness-125 ">
              Go To Shopify <FaShopify className="mx-0"/>
            </Button>
          </div>
        </div>
      </div>

      <div className='px-6 md:px-12 pb-6 md:pb-12'>
        {product.features && product.features.map((featureCategory:any) => {
          return(
            <div className='mb-12 md:mb-16'>
              <h1 className="text-lg md:text-2xl font-medium mb-6">
                {featureCategory.title}
              </h1>
              <div className='grid md:grid-cols-2 gap-4 '>
                {
                  featureCategory.list.map((feature:any, index:any) => {
                    return (
                      <ProductFeatureCard 
                        className='' 
                        title={feature.title}
                        content={feature.description}
                        key={index}
                      />
                    )
                  })
                }
              </div>
            </div>
          )
        })}

        { product.accessoryFeatures && 
          <div className='mb-12 md:mb-16'>
            <div className='grid md:grid-cols-2 gap-4 divide-y-1 divide-slate-300 dark:divide-slate-700 [&>*]:pt-3 
                  [&>*]:md:pt-0 md:divide-y-0 md:gap-y-8 md:gap-x-16 '>
              {
                product.accessoryFeatures.map((feature:any, index:any) => {
                  return (
                    <div>
                      <h2 className='md:text-lg font-semibold'>{feature.title}</h2>
                      <p className='text-justify'>
                        {feature.description}
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }

        { product.includedAccessories && 
          <div className='mb-12 md:mb-16'>
            <div className='grid lg:grid-cols-2 gap-12 md:gap-16'>
              <div>
                <div className='mb-3 md:mb-6'>
                  <h1 className="text-lg md:text-2xl font-medium">
                    {product.includedAccessories.title}
                  </h1>
                  <h2>
                    {product.includedAccessories.subtitle}
                  </h2>
                </div>
                <div className='grid gap-3 divide-y-1 divide-slate-300 dark:divide-slate-700 [&>*]:pt-3'>
                  {
                    product.includedAccessories.list.map((accessory:any, index:any) => {
                      return (
                        <div key={index}>
                          <h1 className='font-semibold'>{accessory.title}</h1>
                          <p className='text-justify'>{accessory.description}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
  
              <div>
                <div className='mb-3 md:mb-6'>
                  <h1 className="text-lg md:text-2xl font-medium">
                    {product.optionalAccessories.title}
                  </h1>
                  <h2>
                    {product.optionalAccessories.subtitle}
                  </h2>
                </div>
  
                <div className='grid gap-3 divide-y-1 divide-slate-300 dark:divide-slate-700 [&>*]:pt-3'>
                  {
                    product.optionalAccessories.list.map((accessory:any, index:any) => {
                      return (
                        <div key={index}>
                          <h1 className='font-semibold'>{accessory.title}</h1>
                          <p className='text-justify'>{accessory.description}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        }

        { product.descriptionLong &&         
          <div className='mb-12 md:mb-16'>
            <h1 className='text-lg lg:text-2xl text-start font-semibold mb-3'>{product.descriptionLong.title}</h1>
            <Divider />
            <p className='my-3'>{product.descriptionLong.content}</p>
            <Divider />
          </div>
        }

        { product.compactSpecifications && 
          <div className='mb-12 md:mb-16'>
            <h1 className='text-lg lg:text-2xl text-start font-semibold mb-6'>Product Specifications</h1>
            <div className='grid lg:grid-cols-3 gap-4 lg:gap-8 '>
              <Table className='lg:col-span-2 mb-4 [&>*]:bg-slate-100 [&>*]:dark:bg-slate-800'>
                <TableHeader columns={specListColumns}>
                  {(column) => <TableColumn className="bg-slate-100 dark:bg-slate-800" key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody className="" items={product.compactSpecifications.specList} >
                  {(item:any) => (
                    <TableRow key={item.spec}  className="">
                      {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              
                <div className='grid md:grid-cols-2 lg:grid-cols-1 md:gap-x-16 gap-y-8'>
                { product.compactSpecifications.includedAccessories &&
                  <div>
                    <h2 className='md:text-lg font-semibold mb-2'> Included Accessories </h2>
                    <div className='grid gap-2 divide-y-1 divide-slate-300 dark:divide-slate-700 [&>*]:pt-2'>
                    {
                      product.compactSpecifications.includedAccessories.map((accessory:any, index:any) => {
                        return (
                          <div key={index}>
                            <p className='text-sm'>{accessory}</p>
                          </div>
                        )
                      })
                    }
                    </div>
                  </div>
                }
                { product.compactSpecifications.optionalAccessories &&
                  <div>
                    <h2 className='md:text-lg font-semibold mb-2'> Optional Accessories </h2>
                    <div className='grid gap-2 divide-y-1 divide-slate-300 dark:divide-slate-700 [&>*]:pt-2'>
                    {
                      product.compactSpecifications.optionalAccessories.map((accessory:any, index:any) => {
                        return (
                          <div key={index}>
                            <p className='text-sm'>{accessory}</p>
                          </div>
                        )
                      })
                    }
                    </div>
                  </div>
                }
                </div>
            </div>

          </div>
        }
      </div>
    </main>
  )
}