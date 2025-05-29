import { describe, it, expect } from 'vitest'
import { fireEvent, getByText, getByRole } from '@testing-library/dom'
import { Card } from './card.ts'

describe('Card', () => {
  it('muestra "Bienvenido" al hacer clic en "Unirse"', async () => {
    const card = new Card(
      'logo.png',
      '5 miembros',
      'Grupo Prueba',
      'Descripción del grupo',
      'Ver más',
      'Unirse'
    )

    card.renderHTML()

    const boton = getByText(document.body, 'Unirse')
    await fireEvent.click(boton)

    const mensaje = getByText(document.body, 'Bienvenido')
    expect(mensaje.classList.contains('hidden')).toBe(false)
  })
})
