/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import CategoricalScheme from '../../CategoricalScheme';

const schemes = [
  {
    id: 'googleCategory10c',
    label: 'Google Category 10c',
    colors: [
      '#3366cc',
      '#dc3912',
      '#ff9900',
      '#109618',
      '#990099',
      '#0099c6',
      '#dd4477',
      '#66aa00',
      '#b82e2e',
      '#316395',
    ],
  },
  {
    id: 'sircloColors',
    label: 'Sirclo Color',
    colors: ['#299ED3', '#2B995E', '#F7961D', '#D9D9D9', '#042F63'],
  },
].map(s => new CategoricalScheme(s));

export default schemes;
